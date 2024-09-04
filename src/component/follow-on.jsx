import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/yogesh-kushwaha-aa5557183">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/yogesh_.1305">
          <FaInstagram size={20} />
        </a>
        <a href="https://github.com/Yogi1305">
          <FaGithub  size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;