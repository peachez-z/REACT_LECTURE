import DiaryItem from "./DiaryItem";

const DiaryList = ({ diarylist, onDelete }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diarylist.length}개의 일기가 있습니다.</h4>
      <div>
        {diarylist.map((it) => (
          // it에 포함된 모든 데이터가 DiaryItem으로 전달
          <DiaryItem key={it.id} {...it} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};
// 일기가 하나도 없을 때
DiaryList.defaultProps = {
  diarylist: [],
};
export default DiaryList;
