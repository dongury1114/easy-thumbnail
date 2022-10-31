export default function Component__btns() {
    return (
        <div className="components__btns">
            <span className="components__txt">썸네일 구성 요소</span>
            <div id="component__btn__container" className="btns">
                <button data-set="comp__opt1" className="btn component__opt selected">제목 / 부제목 / 분류</button>
                <button data-set="comp__opt2" className="btn component__opt">제목 / 분류</button>
                <button data-set="comp__opt3" className="btn component__opt">제목만</button>
            </div>
        </div>
    );
}