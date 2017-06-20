import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map(video => {
		return (
			<VideoListItem  video={video} 
			key={video.etag} 
			/>			
		)
	})
	return (
		<ul className="col-xs-12 col-md-6 col-md-offset-3 list-group">
			{videoItems}
		</ul>
	)
}

export default VideoList;