# One Day One JavaScript 5

다음 요구사항에 따라 **배열 매칭 UI 갱신기(Array Match & UI Updater)**를 구현하시오.
화면에는 임의로 생성된 배열 데이터가 있으며, 각 배열 요소에 대응되는 HTML 엘리먼트가 화면에 표시된다.
사용자가 특정 값을 입력하고 조회 버튼을 클릭하면, 입력값이 배열에 존재할 경우 해당 dataset 속성값이 일치하는 엘리먼트의 UI가 갱신되어야 한다.

## 상세 요구사항
- 모든 동작은 순수 자바스크립트로 구현한다.
- 페이지 로드 시, 임의의 배열(문자 또는 숫자 혼합 가능)을 생성한다. (예: ["apple", "banana", "cherry", 100, 200, "grape"])
- 배열의 각 요소에 대응되는 HTML 엘리먼트를 화면에 출력한다. (예: ```<div data-item="apple">apple</div> <div data-item="banana">banana</div>```...)
- ```<input>``` 입력창 또는 prompt 호출을 통해 검색할 값(문자 또는 숫자)을 입력한다.
- ‘조회’ 버튼 클릭 시, 배열에 해당 값이 존재하면 data-item 속성이 입력값과 일치하는 엘리먼트의 UI를 변경한다 (예: 배경색 변경, 테두리 표시, 강조 효과 등)
- UI 갱신 상태는 입력에 의해 한 번에 하나의 항목만 활성화되도록 한다.
- 검색을 통해 스스로 해결하며, AI를 활용해 코드를 생성하거나 회신받는 행위는 금지한다.

## STUDY
### *this.함수명* 과 *App.함수명*의 쓰임
- 컨텍스트(= 실행 컨텍스트) : 
ᄂ 어떤 함수가 실행될 때 this가 가리키는 대상 객체
ᄂ this는 함수를 어떻게 호출하느냐에 따라 달라짐
ᄂᄂ App.init() 처럼 객체에서 메서드를 호출하면 this === App
ᄂᄂ btnSearch.addEventListener('click', this.searchData) 처럼 함수 레퍼런스만 넘기면, 클릭 순간에 그 함수는 버튼 DOM 요소가 this가 된 상태로 실행 (this === 버튼)
ᄂ 이벤트 핸들러 안에서 this.allData를 쓰고 싶다면, this가 여전히 App을 가리키도록 컨텍스트를 묶어줘야 함
- this.함수명 : 그 함수를 호출하는 시점의 실행 컨텍스트에서 this가 가리키는 객체(보통 인스턴스)에 정의된 메서드
ᄂ App 컨텍스트에서 호출됨
- App.함수명 : 전역이나 다른 스코프에서 App 이라는 객체(또는 모듈)에 직접 붙어 있는 함수(정적 메서드)를 호출할 때 사용
ᄂ 이벤트 콜백과 같은 경우, this가 바뀌지 않도록 App.함수명으로 호출해 안전하게 접근
```
// * this를 유지하기 위한 방법
// 방법1
btnSearch.addEventListener('click', this.searchData.bind(this));

// 방법2
btnSearch.addEventListener('click', () => {
  this.searchData(); // 바깥 App의 this를 그대로 물려받음 ( this === App )
});
```

=> 결론 : this는 호출 시점에 바뀔 수 있는 "현재 객체"를 가리키고, App은 이름이 고정된 하나의 객체를 가리킴

## 구현완료
- 데이터 검색시, 빈값인 경우와 대문자로 검색해도 일치하는 값이 검색되도록 기능을 추가해보았습니다.
- 데이터 검색시, find()를 사용해 input의 value와 data-item의 값이 일치하면 hightlight 클래스를 추가했습니다
- 조회 후, 초기화 할 수 있는 기능을 추가해보았습니다
- 초기화에서는 hightlight가 있는 클래스를 forEach로 모두 순회 후 클래스 제거하는 방식으로 구현해보았습니다