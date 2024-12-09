import React from 'react';
import './UserVideo.css';
import { StreamManager } from 'openvidu-browser'; // OpenVidu에서 StreamManager 타입을 가져옵니다.
import OpenViduVideoComponent from './OvVideo';

interface UserVideoComponentProps {
  streamManager: StreamManager; // StreamManager 타입을 지정합니다.
}

const UserVideoComponent: React.FC<UserVideoComponentProps> = ({
  streamManager,
}) => {
  const getNicknameTag = () => {
    // Gets the nickName of the user
    return JSON.parse(streamManager.stream.connection.data).clientData;
  };

  return (
    <div>
      {streamManager !== undefined ? (
        <div className="streamcomponent">
          <OpenViduVideoComponent streamManager={streamManager} />
          <div>
            <p>{getNicknameTag()}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserVideoComponent;
