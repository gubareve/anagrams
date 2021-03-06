import React from 'react';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Output from './Output.js';
import findAnagrams from './Anagrams.js';
import ErrorAlert from './Errors.js';

class AnagramFinder extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }


  render() {
    if (this.state.value.length < 7 && this.state.value.length !== 0) {
    return (
      <div className="App">
        <header className="App-header">
          <SubtitlesIcon className="Subtitles"/>
          <div className="TextField">
          <TextField id="outlined-basic" label="Enter a word here." variant="outlined" onChange={this.handleChange} defaultValue={this.state.value} />
          </div>
          <div className="Output">
        <Output className="Output" Input={findAnagrams(this.state.value)} />
        </div>
        </header>
      </div>
    );
  } else if (this.state.value.length === 0) {
    return (
      <div className="App">
        <header className="App-header">
          <SubtitlesIcon className="Subtitles"/>
          <div className="TextField">
          <TextField error helperText="Please enter a word!" id="outlined-basic" label="Enter a word here." variant="outlined" onChange={this.handleChange} defaultValue={this.state.value} />
          </div>
          <div className="Output">
          <ErrorAlert message="Please enter a word!"/>
        </div>
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <SubtitlesIcon className="Subtitles"/>
          <div className="TextField">
          <TextField error helperText="Too many letters!" id="outlined-basic" label="Enter text here." variant="outlined" onChange={this.handleChange} defaultValue={this.state.value} />
          </div>
          <div className="Output">
          <ErrorAlert message="Too many letters!" />
        </div>
        </header>
      </div>
    );
  }
}
}

export default AnagramFinder;
