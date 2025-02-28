요구조건

1. textarea의 문자를 입력받아 노출
- 메시지 길이는 10자까지 
- 메시지 없을시 호출 X
- alert 호출
- layer popup 호출
- toast popup 호출
- 팝업 노출 5초 후 fadeout
- 각 호출 element는 닫기버튼을 포함하며 동적으로 생성

2. querystring
- textarea 문자열 및 노출 타입 (alert, layer, toast)
- url 접근 후 textarea 수정 완료시 querystring 반영
- url로 접근 시에도 버튼 클릭과 동일한 결과 노출

=> 쿼드스트링은 도메인으로 파라미터를 전달 할 수 있는 수단으로서 단순히 쿼리스트링 세팅을 통해 UI분기가 일어나게 할 수 있으며, API의 get방식을 호출할때 필요한 조회 인자를 넘기는 수단으로도 사용하게 됨