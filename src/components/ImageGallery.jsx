import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import Item from "./ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import getImages from "./api";

class ImageGallery extends React.Component {
  static propTypes = {
    results: PropTypes.array,
    loading: PropTypes.bool,
    handleResults: PropTypes.func,
  };

  state = {
    results: [],
    loading: false,
  };

  page = 1;

  componentDidUpdate(prevProps, prevState) {
    if (
      !this.state.loading &&
      (this.props.loadMore || prevProps.query !== this.props.query)
    ) {
      this.setState({ loading: true });
      if (prevProps.query !== this.props.query) {
        this.setState((prevState) => ({
          results: [],
        }));
        this.page = 1;
      }
      getImages(
        this.props.query,
        this.page,
        (results) => {
          this.setState((prevState) => ({
            results: prevState.results.concat(results),
          }));
        },
        () => {
          this.handleResults();
          this.setState({ loading: false });
          this.page += 1;
        }
      );
    }
  }

  handleResults = () => {
    this.props.onUpd(this.state.results);
  };

  render() {
    return (
      <div>
        {this.state.loading && (
          <Loader
            type="ThreeDots"
            color=" #3f51b5"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        <Gallery>
          {this.state.results &&
            this.state.results.map((item) => (
              <Item
                key={item.id}
                image={item}
                onClick={() => this.props.onClick(item.id)}
              />
            ))}
        </Gallery>
      </div>
    );
  }
}
export default ImageGallery;
