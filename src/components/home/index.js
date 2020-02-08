import React from 'react';
import { connect } from 'react-redux'
import { fetchImageList } from '../../redux/fetch-image-list';
import './style.css';
import Card from './card/card';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchImageList()
  }

  renderCards = () => {
    const { imageList }=this.props
    if(imageList.length) {
      return imageList.map(imageData => <Card cardData={imageData} key={imageData.name} />)
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list-container">
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  const {
    imageListReducer: {
      imageList
    }
  } = reduxState

  return { imageList }
}

export default connect(mapStateToProps, {fetchImageList})(Home)