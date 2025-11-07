# One Day One JavaScript 3

다음 요구사항에 따라 **키보드 입력도구(Keyboard Input Tool)**를 구현하시오.
화면에는 <input></input> 콘텐츠가 있으며, 페이지 로드 시, 0~9 숫자 버튼을 생성하여 랜덤 배치 한다 (3X3 배열)

## 상세 요구사항
- 모든 동작은 순수 자바스크립트로 구현한다.
- 콘텐츠 영역에는 <input type="text">이 존재한다.
- 페이지 로드 시, 0~9 숫자를 무작위로 섞은 버튼 배열(3X3)을 생성한다. (예: <button>3</button>, <button>8</button>, <button>1</button>, <button>9</button>...)
- 각 버튼을 클릭하면 해당 숫자가 입력창에 추가된다.
- 같은 버튼을 빠르게 연속 클릭할 경우 중복 입력이 되지 않도록 한다.
- 입력창은 직접 키보드로 수정할 수 없으며, 오직 버튼 클릭으로만 숫자를 입력할 수 있다.
- 검색을 통해 스스로 해결하며, AI를 활용해 코드를 생성하거나 회신받는 행위는 금지한다.

## STUDY
###[debouncing(디바운싱)과 throttling(쓰로틀링)](https://velog.io/@seoyaon/Javascript-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8B%B1debouncing%EA%B3%BC-%EC%93%B0%EB%A1%9C%ED%8B%80%EB%A7%81throttling)
ᄂ 프로그래밍 기법

- debouncing(디바운싱)
: 연이어 호출되는 함수들 중 마지막 함수(또는 제일 첫번째 함수)만 호출하도록 하는 것
-> 이벤트 핸들러가 여러번 호출되는 것을 방지하고자 할 때 사용
```
window.addEventListener('input', debounce(function(e) {
  console.log(e.target.value);
}, 200));

function debounce(func, delay) {
  let timer;
  return function() {
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}
// 1. window 객체에 사용자가 입력할 때마다 발생하는 input 이벤트를 등록합니다.
// 2. debounce 함수를 호출하여 input 이벤트가 발생할 때마다 실행되는 함수를 전달합니다.
// 3. debounce 함수는 내부적으로 타이머를 실행하여 일정 시간(200ms)이 지난 후에 함수를 실행합니다. 타이머가 실행될 때마다 clearTimeout 함수를 사용하여 이전 타이머가 존재한다면 취소합니다.
// 4. func.apply(this, args)를 호출하여 실제 실행될 함수를 실행합니다. 여기서는 e.target.value 값을 출력하는 함수가 실행됩니다.
```

throttling(쓰로틀링)
: 일정 시간 동안 이벤트 핸들러를 한 번만 실행하도록 제어하는 것
-> 일정 시간 동안 특정 이벤트가 연속해서 발생하더라도, 일정 주기마다 최대 한 번의 이벤트만 실행하고자 할 때 사용
```
window.addEventListener('input', throttle(function(e) {
  console.log(e.target.value);
}, 200));

function throttle(func, delay) {
  let timer;
  return function() {
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}
```


## 구현완료
- debouncing와 throttling 개념에 대해 알게되었습니다
- 생성한 랜덤숫자를 배열에 담을 때가 가장 시간이 오래걸렸습니다 배열에 숫자를 담는 코드 위치와 배열 길이 만큼 반복문을 나오지 못하게 하는 부분에서 어려웠습니다