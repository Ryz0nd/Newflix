import React from "react";
import TVPresent from "./tvPresent";
import {tvToprated, tvPopular, tvLatest, tvDetail, tvApi } from "../../api";

export default class extends React.Component {
    state = {
      topRated: null,
      popular: null,
      latest: null,
      loading: true,
      error: null
    };
  
    async componentDidMount() {
      try {
        const {
          data: { results: topRated }
        } = await tvApi.topRated();
        const {
          data: { results: popular }
        } = await tvApi.popular();
        const {
          data: { results: latest }
        } = await tvApi.latest();
        this.setState({ topRated, popular, latest });
      } catch {
        this.setState({
          error: "Can't find TV information."
        });
      } finally {
        this.setState({ loading: false });
      }
    }
  
    render() {
      const { topRated, popular, latest, loading, error } = this.state;
      return (
        <TVPresent
          topRated={topRated}
          popular={popular}
          latest={latest}
          loading={loading}
          error={error}
        />
      );
    }
  }
  