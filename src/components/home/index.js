import React from 'react';
import { connect } from 'react-redux'
import { fetchImageList } from '../../redux/fetch-image-list';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchImageList()
  }
  render() {
    console.log({ imageList: this.props.imageList })
    return (
      <div>
        <p>hello</p>
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