export default function InputFields() {
    return (<div>
        <div>
            <input class="input__field input__title" data-set="title" type="text" spellcheck="false"
                placeholder=">제목을 입력하세요" /> <br />
            <input class="input__field input__subtitle" data-set="subtitle" type="text" spellcheck="false"
                placeholder=">부제목을 입력하세요" /><br />
            <input class="input__field input__category" data-set="category" type="text" spellcheck="false"
                placeholder=">분류를 입력하세요" /><br />
        </div>
    </div>);
}
