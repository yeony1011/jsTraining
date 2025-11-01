# One Day One JavaScript 2

다음 요구사항에 따라 **텍스트 태그 생성기(Text Tag Creator)**를 구현하시오.
화면에는 ```<div>aaaabbbbccccddddeeeeffff~~</div>``` 기본 콘텐츠가 존재한다.
코드 내에서 자유롭게 버튼을 선언하고, 사용자가 텍스트를 선택한 후 해당 버튼을 클릭하면 선택된 텍스트가 버튼에 지정된 태그로 변환되어 치환된다.

## 상세 요구사항
- 모든 동작은 순수 자바스크립트로 구현한다.
- 화면에는 ```<div>aaaabbbbccccdddd</div>```과 버튼 요소가 존재한다.
- 버튼은 ```<button>h1</button>``` ```<button>strong</button>``` ```<button>p</button>```등 자유롭게 생성하여 사용한다.
- ```<div>```의 텍스트 중 일부(예: aaaa, aaa, aabb, bbbb)를 선택한 후, 버튼을 클릭하면 선택된 텍스트가 버튼에 지정된 HTML 태그로 감싸져 콘텐츠가 갱신된다.
- 기존 나머지 텍스트는 그대로 유지한다.
- 검색을 통해 스스로 해결하며, AI를 활용해 코드를 생성하거나 회신받는 행위는 금지한다.

## tip
- ```window.getSelection();```
- ```window.getSelection().rangeCount```
- ```window.getSelection().getRangeAt(index);```