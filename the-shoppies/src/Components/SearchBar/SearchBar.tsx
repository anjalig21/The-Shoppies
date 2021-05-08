import React, { useCallback, useEffect, useState } from "react";
import { Icon, Thumbnail, Autocomplete, TextContainer } from "@shopify/polaris";
import { SearchMinor } from "@shopify/polaris-icons";
import { useLazyQuery } from "@apollo/client";
import { LOAD_TITLE } from "../../GraphQL/Queries";
import movieInterface from "../../Models/movies";
import { OptionDescriptor } from "@shopify/polaris/dist/types/latest/src/components/OptionList";
import { ImageMajor } from "@shopify/polaris-icons";
import SearchBarHook from "./SearchBarHook";

export default function SearchBar() {
  const deselectedOptions = [
    { value: "rustic", label: "Rustic" },
    { value: "antique", label: "Antique" },
    { value: "vinyl", label: "Vinyl" },
    { value: "vintage", label: "Vintage" },
    { value: "refurbished", label: "Refurbished" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<OptionDescriptor[]>(deselectedOptions);
  const [loading, setLoading] = useState(false);
  const {setSearch} = SearchBarHook();
  const [movieType, { data }] = useLazyQuery(LOAD_TITLE, {
    variables: {
      title: inputValue,
    },
  });

  useEffect(() => {
    let movies: OptionDescriptor[] = [];
    if (data?.movieSearch) {
      data.movieSearch.map((movie: movieInterface) => {
        if (movie.Type == "movie") {
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
    }
    setOptions(movies);
    setLoading(false);
  }, [data]);

  const updateText = useCallback(
    (value) => {
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
      const selectedText = selected.map((selectedItem: any) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });
      setSelectedOptions(selected);
      setInputValue(selectedText);
    },
    [options]
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Title"
      value={inputValue}
      prefix={<Icon source={SearchMinor} color="base" />}
      placeholder="Search"
    />
  );

  const emptyState = (
    <React.Fragment>
      <Icon source={SearchMinor} />
      <div style={{ textAlign: "center" }}>
        <TextContainer>Could not find any results</TextContainer>
      </div>
    </React.Fragment>
  );

  function onClicking(e: KeyboardEvent) {
    if (e.code === "Enter") {
      setSearch(data);
    }
  }

  return (
    <div style={{ height: "20vh" }} onKeyPress={(e: any) => onClicking(e)}>
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
