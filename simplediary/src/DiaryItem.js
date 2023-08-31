const DiaryItem = ({
  author,
  content,
  emotion,
  created_date,
  id,
  onDelete,
}) => {
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
      <div className="content">내용 : {content}</div>
      <button
        onClick={() => {
          if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default DiaryItem;
