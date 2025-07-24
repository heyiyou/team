import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BoardList() {
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/cal/board/list')
      .then(res => setBoards(res.data))
      .catch(err => console.error('게시글 목록 불러오기 실패:', err));
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>게시판 목록</h2>

      {/* 게시글 등록 버튼 */}
      <button onClick={() => navigate('/board/register')} style={{ marginBottom: '20px' }}>
        게시글 등록
      </button>

      <ul>
        {boards.map((board) => (
          <li key={board.id} style={{ marginBottom: '10px' }}>
            <strong>{board.title}</strong> - 작성자: {board.writer}
            <br />
            {/* 수정하기 버튼 */}
            <button onClick={() => navigate(`/board/edit/${board.id}`)} style={{ marginTop: '5px' }}>
               수정하기
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
