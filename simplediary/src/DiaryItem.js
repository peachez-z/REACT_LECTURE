const DiaryItem = ({ author, content, emotion, created_date, id }) => {
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
      <span className="content">내용 : {content}</span>
    </div>
  );
};

export default DiaryItem;
