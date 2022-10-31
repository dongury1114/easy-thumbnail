export default function Footer() {
    return (
        <div>
            <div className="background__btns" >
                <span className="background__txt">배경을 정해주세요</span>
                <div id="background__btn__container" className="btns">
                    <button className="btn random__gradient">랜덤 그라디언트</button>
                    <button className="btn random__solid">랜덤 단색</button>
                    <button className="btn img__url">이미지 URL</button>
                </div>
            </div >
        </div >

    );
}