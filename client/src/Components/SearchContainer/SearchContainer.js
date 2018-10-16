import React, { Component } from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Input from "../Form/Input";
import FormBtn from "../Form/FormBtn";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import SaveBtn from "../SaveBtn/SaveBtn";
import API from "../../utils/API";
import cheerio from "cheerio";

class SearchContainer extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    results: [],
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  getAllArticles = (topic, startYear,endYear) => {
    API.findAll(topic,startYear,endYear).then(res => {
      var $ = cheerio.load(res.data);
      var articles = [];
      console.log(res.data);

      $("li.SearchResults-item--3k02W").each(function (i, element) {
          var result = {};

          result.title = $(this).find("h4").text();
          result.url = "https://www.nytimes.com"+$(this).find("a").attr("href");
          console.log($(this).find("a").attr("href"))
          console.log(result.url);
          result.summary = $(this).find("p.Item-summary--3nKWX").text()
          
          articles.push(result);
          console.log(result)
      });
      this.setState({results:articles});
    })
  }

  handleSearch = event => {
    event.preventDefault();
    this.getAllArticles(this.state.topic, this.state.startYear, this.state.endYear)
  }

  saveArticle = article => {
    API.save(article);

  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>Search</h1>
          </Row>
          <Row>
            <form>
              <Input
                name="topic"
                placeholder="Type here"
                value={this.state.topic}
                onChange={this.handleChange}
              />
              <Input
                name="startYear"
                placeholder="Type start year here"
                value={this.state.startYear}
                onChange={this.handleChange}
              />
              <Input
                name="endYear"
                placeholder="Type end year here"
                value={this.state.endYear}
                onChange={this.handleChange}
              />
              <FormBtn onClick={this.handleSearch}>Search</FormBtn>
            </form>
          </Row>
        </Container>

        <Container>
          <Row>
            <h1>Results</h1>
          </Row>
          {this.state.results.length ? (
              <List>
                {this.state.results.map(article => {
                  return (
                    <ListItem key={article._id}>
                      <a key={article._id} href={article.url}>
                        <strong>
                          {article.title}
                        </strong>
                      </a>
                      <div>
                        Summary: {article.summary}
                      </div>
                      <button onClick={()=>{this.saveArticle(article)}}>SAVE</button>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Container>
      </div>
    );
  }
}

export default SearchContainer;
