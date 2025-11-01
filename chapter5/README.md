# One Day One JavaScript 1

다음 요구사항에 따라 **HTML 태그 변환기(Tag Converter)**를 구현하시오.
화면에는 ```<div>aaaa</div>``` ```<button>버튼 생성</button>``` 콘텐츠가 있으며, 버튼생성을 클릭해 새로운 버튼을 생성하고, div를 다른 HTML 태그로 변경한다.

## 상세 요구사항
- 모든 동작은 순수 자바스크립트로 구현한다.
- 화면에는 ```<div>aaaa</div>``` 와 ```<button>버튼 생성</button>```이 존재한다.
- ‘버튼 생성’ 버튼 클릭 시, 생성할 태그명을 입력받아 해당 태그명이 표시된 버튼을 생성한다.(예: ```<button>h1</button>```, ```<button>p</button>``` 등)
- 생성된 버튼을 클릭하면, 현재 콘텐츠 영역의 ```<div>``` 태그가 해당 버튼의 태그로 변경되어야 한다.
- ```<a>``` 태그의 경우, href 속성값을 추가로 입력받아 해당 속성으로 지정한다.
- 검색을 통해 스스로 해결하며, AI를 활용해 코드를 생성하거나 회신받는 행위는 금지한다.

## tip
ㄴ 모든 태그를 나열해 유효한 태그인지 확인
ㄴ 태그의 입력은 prompt 사용
ㄴ replaceWith

## STUDY
&& (AND)
- true && true = true → 실행
- false && true = false → 미실행
- true && false = false → 미실행

|| (OR)
- true || true = true → 실행
- false || true = true → 실행
- true || false = true → 실행

Set vs 배열 비교
Set : 중복 없는 값 모음
```
const mySet = new Set(['사과', '바나나', '사과']);
console.log(mySet); // Set(2) {'사과', '바나나'} ← 중복 제거!

// 주로 사용하는 메서드
mySet.has('사과');    // true ← 이게 핵심! 빠른 존재 확인
mySet.add('오렌지');  // 요소 추가
mySet.delete('사과'); // 요소 삭제
```

배열
```
const myArray = ['사과', '바나나', '사과'];
console.log(myArray); // ['사과', '바나나', '사과'] ← 중복 그대로

// 비교하면
myArray.includes('사과'); // true ← 느림 (배열 전체 탐색)
```

[replaceWith()](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith)
DOM 요소를 다른 요소나 텍스트로 교체할 때 사용하는 메서드
```
oldElement.replaceWith(newElement);
// oldElement: 교체될 기존 DOM 요소
// newElement: 새로 대체할 요소(또는 텍스트)
```

이벤트 위임
- 메모리 절약 : 많은 핸들러를 등록하는 대신 하나만 등록하여 메모리 사용량을 줄일 수 있다
- 동적 요소 처리 : 나중에 동적으로 추가되는 하위 요소에 대해서도 별도의 핸들러 등록 없이 자동으로 이벤트 처리가 가능

인라인 이벤트 핸들러 프로퍼티
```element.onclick```, ```element.onmouseover```

|구분|```element.onclick = function(){}```|이벤트 위임 (주로 ```addEventListener``` 사용)|
|---|---|---|
|처리|방식	개별 요소에 직접 핸들러 할당|상위 요소에 단 하나의 핸들러 할당|
|핸들러 개수|하위 요소 개수만큼 핸들러 등록|단 하나|
|중복 등록|불가능 (새 함수 할당 시 이전 함수 덮어씀)|가능 (```addEventListener```는 같은 이벤트에 여러 핸들러 등록 가능)|
|적합한 상황|대상 요소가 적거나 변경이 거의 없을 때|동적 요소가 많거나 성능/메모리가 중요할 때|
|event.target 활용|일반적으로 ```event.target```과 ```event.currentTarget```이 동일함|**```event.target```**을 사용하여 실제 이벤트 발생 요소를 구분하는 것이 핵심|

모던 JS의 권장 방식
- ```element.addEventListener('click', handlerFunction)```
- 이 방식은 여러 개의 핸들러를 중복으로 등록할 수 있고, 이벤트 캡처링 단계에서 이벤트를 잡을지(```useCapture: true``` 옵션) 등을 세밀하게 제어할 수 있기 때문입니다.
- 이벤트 위임은 이 ```addEventListener()``` 방식을 이용하여 상위 요소에 핸들러를 등록하고, 내부에서 ```event.target```을 활용하는 기법입니다.

## 구현완료
- 태그 변환이 어려울 것 같았는데, tip으로 알려주신 ```replaceWith()``` 메서드로 생각외로 어렵지 않았고 처음 접해 알아보게되었습니다.
- 이전 과제에서도 동적 생성된 버튼에 이벤트를 줄 때 이벤트 위임을 해야한다는 것을 알게되었지만, 코드 작성할때마다 오류가 나서야 수정하곤해서 이번에도 다시 한번 기억해야 한다는 걸 느꼈습니다.
- a 태그의 경우 속성값 추가해야하는 요구사항을 보면서, 자주쓰이는 button/img/input/label 에 대한 속성값도 추가할 수 있도록 switch-case문을 사용해 적용해보았습니다.
- 생성된 버튼에서 사용자가 다시 ```<butotn>버튼 생성</button>``` 버튼을 클릭할 경우, 기존 생성된 버튼은 제거하고 새로 입력한 버튼으로 append 될 수 있는 기능을 넣었습니다.
ᄂ 동적으로 생성된 버튼이 있는지 유무를 체크하는 코드와 위치를 넣는 부분이 이번 과제에서 가장 어려웠습니다.
- 중첩 if문을 사용하지 않으려고 고려했습니다