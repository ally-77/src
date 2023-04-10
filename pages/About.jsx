import React, { useState } from "react";
import "../styles/About.css";
import "../styles/ModalAbout.css";

function About() {
  const [showModal, setShowModal] = useState(false);

  const handleVideoPlay = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="about">
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to the National Dodgeball Club, where we live and breathe the high-energy and fast-paced game of dodgeball. Our club is dedicated to promoting and advancing the sport of dodgeball in the nation by providing a safe and supportive environment for players of all ages and skill levels to learn, train, and compete. <br />
          Founded in 2008, the National Dodgeball Club is comprised of 26 leagues and counting across the nation. <br />
          All teams regionally or state, can register to join the National Dodgeball Club in their local league and compete nationally. Our team of experienced coaches and staff is committed to helping each player reach their full potential, whether they are just starting out or aiming for a spot on the national team. With access to top-notch facilities and equipment, our members can expect nothing but the best training and playing experience. Join us and become part of a vibrant community of dodgeball enthusiasts who share your passion for the game. Whether you're looking for a fun way to stay active or have your sights set on becoming a world champion, the National Dodgeball Club is the place to be. <br />
          <h2>
            <b>Let's play!</b>
          </h2>
        </p>
      </div>
      <div className="aboutVideo">
        <video
          src="https://media.gettyimages.com/id/1183246226/video/r-f-man-throwing-ball-while-trying-to-avoid-being-hit-during-dodgeball-game.mp4?s=mp4-640x640-gi&k=20&c=TfZdR93B0sSmGQz4wCsh0l0VcjbWEuQz7OhR4IvEiJ0="
          width="560"
          height="315"
          onPlay={handleVideoPlay}
          controls
        />
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>Thanks for watching! We hope to see you playing soon.</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
