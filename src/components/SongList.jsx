import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
  render() {
    return (
      <div>
        <h1>SongList</h1>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {songs: state.songs};
}
export default connect(mapStateToProps)(SongList);