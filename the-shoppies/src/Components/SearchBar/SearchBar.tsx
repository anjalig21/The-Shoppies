import React, { useCallback, useEffect, useState } from "react";
import { Icon, Thumbnail, Autocomplete, TextContainer } from "@shopify/polaris";
import { SearchMinor } from "@shopify/polaris-icons";
import { useLazyQuery } from "@apollo/client";
import { LOAD_TITLE } from "../../GraphQL/Queries";
import movieInterface from "../../Models/movies";
import { OptionDescriptor } from "@shopify/polaris/dist/types/latest/src/components/OptionList";
import { ImageMajor } from "@shopify/polaris-icons";
import { useDispatch } from "react-redux";
import { setMovList } from "../../actions";

export default function SearchBar() {
  const deselectedOptions: any = [];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<OptionDescriptor[]>(deselectedOptions);
  const [loading, setLoading] = useState(false);
  const [bool, setBool] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const dispatch = useDispatch();
  const [movieType, { data }] = useLazyQuery(LOAD_TITLE, {
    variables: {
      title: inputValue,
    },
  });

  useEffect(() => {
    if (trigger) {
      movieType();
    }
  }, [trigger]);

  useEffect(() => {
    let movies: OptionDescriptor[] = [];
    if (data?.movieSearch) {
      data.movieSearch.map((movie: movieInterface) => {
        if (movie.Type === "movie") {
          movies.push({
            value: movie.imdbID,
            label: `${movie.Title} (${movie.Year})`,
            media: (
              <Thumbnail
                source={movie.Poster !== "N/A" ? movie.Poster : ImageMajor}
                alt="Thumbnail"
              />
            ),
          });
        }
      });
      if (trigger) {
        dispatch(setMovList(data?.movieSearch));
        setTrigger(false);
        setBool(false);
        setOptions([]);
      }
    }
    setOptions(movies);
    setLoading(false);
  }, [data]);

  const updateText = useCallback(
    (value) => {
      setBool(true);
      setInputValue(value);
      if (!loading) {
        setLoading(true);
      }
      if (value === "") {
        setOptions(deselectedOptions);
        setLoading(false);
        return;
      }
      movieType();
    },
    [deselectedOptions, loading]
  );

  const updateSelection = useCallback(
    (selected) => {
      for (let i = 0; i < options.length; i++) {
        if (options[i].value === selected[0]) {
          const idx = (options[i]?.label as string).indexOf("(");
          const data = (options[i]?.label as string).substring(0, idx).trim();
          setInputValue(data);
          setSelectedOptions(selected);
          setTrigger(true);
        }
      }
    },
    [options]
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Nominate Your Favourite Films 😄 :"
      value={inputValue}
      prefix={<Icon source={SearchMinor} color="base" />}
      placeholder="Search"
    />
  );

  const emptyState = (
    <React.Fragment>
      {bool && (
        <>
          <Icon source={SearchMinor} />
          <div style={{ textAlign: "center" }}>
            <TextContainer>Could not find any results</TextContainer>
          </div>
        </>
      )}
    </React.Fragment>
  );

  function onClicking(e: KeyboardEvent) {
    if (e.code === "Enter") {
      if (data?.movieSearch) {
        dispatch(setMovList(data?.movieSearch));
        setBool(false);
        setOptions([]);
      }
    }
  }

  return (
    <div style={{ height: "15vh" }} onKeyPress={(e: any) => onClicking(e)}>
      <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        emptyState={emptyState}
        loading={loading}
        textField={textField}
      />
    </div>
  );
}
