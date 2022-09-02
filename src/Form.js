import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useHistory } from 'react-router-dom';
import options from './data';
import Player from './Player';
//import './form.css';
import song from './music/Baarishein Hon Magar(KoshalWorld.Com).mp3';
// import song from './songs';

let formData = [];
const Form = () => {
  const history = useHistory();
  const [selected, setSelected] = useState([]);
  const [track1, setTrack1] = useState('');
  const [track2, setTrack2] = useState('');
  const [track3, setTrack3] = useState('');
  const [track4, setTrack4] = useState('');
  const [track5, setTrack5] = useState('');
  const [track6, setTrack6] = useState('');
  const [track7, setTrack7] = useState('');

  const onChangeHandler = (searchName) => {
    setSelected(searchName);
  };
  
  useEffect(() => {
    setTrack7('Kishor Kumar - Aachal ke tuze');
  }, []);

  const handleClickAction = (skipped) => {
    const dataLen = formData.length;
    let insertObj = {};
    console.log(selected)
    if(skipped){
      insertObj = {
        "label": "Skipped"
      };
    }
    else{
      insertObj = selected[0];
    }
      // if (skipped) {
      //   insertObj.label = 'Skipped';
      // }

      formData.push(insertObj);
      if (dataLen === 0) {
        setTrack1(formData[0].label);
      } else if (dataLen === 1) {
        setTrack2(formData[1].label);
      } else if (dataLen === 2) {
        setTrack3(formData[2].label);
      } else if (dataLen === 3) {
        setTrack4(formData[3].label);
      } else if (dataLen === 4) {
        setTrack5(formData[4].label);
      } else if (dataLen === 5) {
        setTrack6(formData[5].label);
      } else {
        console.log('You lost');
      }
    

    if (track7 === formData[dataLen].label) {
      console.log('You Won');
      history.push('/successTrack');
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleClickAction(false);
  };

  const handleSkipped = (evt) => {
    evt.preventDefault();
    handleClickAction(true);
  };

  return (
     <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 offset-lg-2 g-0 mx-auto">
            <div className="fill-form form-box">
              <div className="row g-0">
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <div id="box-title">
                    <p className="main-form-text">Please search below </p>
                  </div>
                  <form>
                    <div className="mt-3">
                      <input
                        className="form-control"
                        id="track1"
                        name="track1"
                        type="text"
                        readOnly
                        value={track1}
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        className="form-control"
                        id="track2"
                        name="track2"
                        type="text"
                        readOnly
                        value={track2}
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        className="form-control"
                        id="track3"
                        name="track3"
                        type="text"
                        readOnly
                        value={track3}
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        className="form-control"
                        id="track4"
                        name="track4"
                        type="text"
                        readOnly
                        value={track4}
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        className="form-control"
                        id="track5"
                        name="track5"
                        type="text"
                        readOnly
                        value={track5}
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        className="form-control"
                        id="track6"
                        name="track6"
                        type="text"
                        readOnly
                        value={track6}
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        className="form-control"
                        id="track7"
                        name="track7"
                        type="hidden"
                        readOnly
                        value={track7}
                      />
                    </div>
                    <div className="mt-3">
                      <Typeahead
                        id="searchTrack"
                        onChange={(searchName) => onChangeHandler(searchName)}
                        options={options}
                        maxResults = {10}
                        emptyLabel = "No matches found"
                        paginate = {false}
                        placeholder="Guess the Song..."
                        selected={selected}
                      />
                    </div>
                    <div className="d-grid mt-2">
                      <button
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="submit"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="d-grid mt-2">
                      <button
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Skip"
                        onClick={handleSkipped}
                      >
                        Skip
                      </button>
                    </div>
                    <div className="d-grid mt-2">
                      <Player url ={song} timevalue={formData.length}/>
                    </div>
                        
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;