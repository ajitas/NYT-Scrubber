import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container/Container";
import Row from "../Row/Row";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";

class Saved extends Component {
    state={
        results : []
    };

    componentDidMount(){
        API.getAll().then(res =>
            this.setState({ results: res.data})
          )
          .catch(err => console.log(err));
    }

    deleteArticle = id =>{
        API.delete(id).then(res =>
            API.getAll().then(res2 =>
                this.setState({ results: res2.data})
              )
              .catch(err => console.log(err))
          )
          .catch(err => console.log(err));
    }

    render() {
        return (
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
                      <button onClick={()=>{this.deleteArticle(article._id)}}>DELETE</button>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Container>
        )
    }
};

export default Saved;