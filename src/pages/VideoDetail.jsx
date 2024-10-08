import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
    const {videoId} = useParams();

    return (
        <span>이것은 비디오 디테일 페이지 입니다 / {videoId}</span>
    )
}