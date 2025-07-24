import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BoardRegister() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !content.trim() || !writer.trim()) {
      alert('제목, 내용, 작성자를 모두 입력하세요!');
      return;
    }

    const newBoard = { title, content, writer };
    setLoading(true);

    axios.post('http://localhost:8080/cal/board/register', newBoard)
      .then(res => {
        alert(res.data);
        navigate('/');  // 등록 후 목록이나 메인으로 이동 (필요에 따라 변경 가능)
      })
      .catch(err => {
        console.error(err);
        setMessage('❌ 게시글 등록 실패');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>게시글 등록</h2>
      {loading && <p>등록 중...</p>}
      {message && <p>{message}</p>}

      <div style={{ marginBottom: '10px' }}>
        <label>제목: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>내용: </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: '100%', height: '100px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>작성자: </label>
        <input
          type="text"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      <button onClick={handleSubmit}>등록하기</button>
    </div>
  );
}
