import React from "react";
import poster from "../../images/video-preloader.gif";

function ProjectCard(props) {
  const { card } = props;
  const {
    name,
    url,
    type,
    techs,
    githubUrl,
    githubUrlApi,
    linkText,
    linkApiText,
    videoMkv,
    videoWebM,
    videoAv1,
    deploy,
  } = card;

  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => {
    if (hovered) {
      setHovered(false);
    } else {
      setHovered(true);
    }
  };
  return (
    <li className="projects__item">
      <article className="project">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          className="project__link"
        >
          <video
            poster={poster}
            className="project__video"
            style={{ transform: hovered && "scale(105%)" }}
            autoPlay
            loop
            muted
          >
            <source src={videoAv1} type="video/mp4" />
            <source src={videoWebM} type="video/webm" />
            <source src={videoMkv} type="video/mp4" />
            <img src={poster} alt="Тут должно было быть видео"></img>
          </video>
        </a>

        <div className="project__info">
          <div
            className="project__name"
            style={{ columnGap: hovered && "120px" }}
          >
            <h2 className="project__title">{name}</h2>
            <span className="project__arrow">--&gt;</span>
          </div>

          <p className="project__text">{type}</p>
          <p className="project__text">{techs}</p>
          <p className="project__text">
            GitHub:{" "}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project__github-link"
            >
              {linkText}
            </a>
            {githubUrlApi && (
              <>
                <span>&#x20;</span>
                <a
                  href={githubUrlApi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__github-link"
                >
                  {linkApiText}
                </a>
              </>
            )}
          </p>
          <p className="project__text">Deploy: {deploy}</p>
        </div>
      </article>
    </li>
  );
}

export default ProjectCard;
