export default function Text__style() {
    return (
        <div className="text__style">
            <span className="textstyle__txt">텍스트 스타일 변경</span>
            <div id="textstyle__btn__container" className="btns">
                <button className="btn text__btn text__shadow">텍스트 그림자</button>
                <button className="btn text__btn text__invert">텍스트 색상 반전</button>
                <button className="btn text__btn text__size">제목 크기 작게</button>
            </div>
        </div>
    );
}