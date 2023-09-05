import { useState, useRef } from "react";

const DiaryItem = ({
  onEdit,
  author,
  content,
  emotion,
  created_date,
  id,
  onRemove,
}) => {
  // 수정 폼
  const [isEdit, setisEdit] = useState(false);
  const toggleIsEdit = () => setisEdit(!isEdit);
  // 수정한 내용
  const [localContent, setlocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  // 수정 취소하면 수정한 내용이 저장 안되게 만드는 함수
  const handleQuitEdit = () => {
    // 수정창을 끄고
    setisEdit(false);
    // 내용은 content 그대로 넣어두기
    setlocalContent(content);
  };

  // 수정 완료
  const handelEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      // 수정 폼 닫기
      toggleIsEdit();
    }
  };
  return (
    <div className="DiaryItem">
      <span>
        작성자 : {author} | 감정점수 : {emotion}
      </span>
      <br />
      <span className="date">
        작성시간 : {new Date(created_date).toLocaleString()}
      </span>
      <hr />
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setlocalContent(e.target.value)}
            ></textarea>
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handelEdit}>수정완료</button>
        </>
      ) : (
        <>
          {" "}
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
