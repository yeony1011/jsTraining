/**
 * 변수 설정
 */
const boxTooltip = document.querySelector('.box_tooltip');
const btnTooltip = document.querySelector('.btn_tooltip');

const money = document.querySelector('.money');

const txtName = document.querySelectorAll('.txt_name');
const txtPrice = document.querySelectorAll('.txt_price');
const txtAmount = document.querySelectorAll('.txt_amount');
const btnPlus = document.querySelectorAll('.btn_plus');
const btnMinus = document.querySelectorAll('.btn_minus');
const inpCheck = document.querySelectorAll('.inp_check');
const inpCount = document.querySelectorAll('.inp_count');

let cartData = [];
const btnCart = document.querySelector('.btn_cart');
const cartProduct = document.querySelector('.wrap_cart .list_product');

let totalTxt;
const totalPrice = document.querySelector('.total_price .txt_g');
const btnPay = document.querySelector('.btn_pay');
const btnCancle = document.querySelector('.btn_cancle');

/** 
 * 상품 리스트 데이터
 */
const productsData = [
  { id: 0, name: '샤넬백👛', count: 1, amount: 5, price: 2500 },
  { id: 1, name: '에르메스백🧳', count: 1, amount: 2, price: 2000 },
  { id: 2, name: '구찌백👜', count: 1, amount: 3, price: 3000 },
];

/**
 * 상품 리스트 데이터 출력
 */
productsData.forEach((item, index) => {
  txtName[index].innerText = item.name;
  txtPrice[index].innerText = item.price.toLocaleString();
  txtAmount[index].innerText = item.amount;
});

/**
 * 툴팁 열고/닫기
 */
btnTooltip.addEventListener('click', function(){
  if(boxTooltip.className === 'box_tooltip on'){
    boxTooltip.classList.remove('on');
  }else{
    boxTooltip.classList.add('on');
  }
});

/**
 * 마이너스 수량 카운트
 */
btnMinus.forEach((item, index) => {
  item.addEventListener('click', function(e){
    if(e.target.nextElementSibling.value > 1){
      e.target.nextElementSibling.value--;
    }else{
      alert('최소 1개 수량으로 선택해주세요!');
    }
  });
});

/**
 * 플러스 수량 카운트
 */
btnPlus.forEach((item, index) => {
  item.addEventListener('click', function(e){
    if(e.target.previousElementSibling.value < productsData[index].amount){
      e.target.previousElementSibling.value++;
    }else{
      alert(`최대 수량은 ${productsData[index].amount}개까지 있습니다~`);
    }
  });
});

/**
 * 장바구니 담기
 */
btnCart.addEventListener('click', function(){
  let productChk = false; // 체크박스 유무
  let tempIdx; // 같은 상품 체크됐는지 체크하기 위한 idx
  let nowItem; // 현재 들어온 상품

  // 상품 체크 한 경우
  inpCheck.forEach((item, index) => {
    if(item.checked){
      productChk = true;
      
      nowItem = { 
        id: item.value,
        count: Number(inpCount[index].value),
        price: productsData[index].price * inpCount[index].value
      };

      // 기존에 담았던 상품이 있는지 체크
      tempIdx = -1;
      for(let i = 0; i < cartData.length; i++){
        if(nowItem.id == cartData[i].id){
          tempIdx = nowItem.id;
          // console.log('기존에 담긴 상품', tempIdx);
          break;
        }
      }

      // 재고수량이 0 이상일때만
      if(productsData[index].amount > 0){
        // 기존에 담았던 상품이 있는 경우, 장바구니 업데이트 & 재고수량 업데이트
        if(tempIdx >= 0){
          cartData[tempIdx].count = Number(cartData[tempIdx].count) + Number(nowItem.count);
          cartData[tempIdx].price = cartData[tempIdx].price + nowItem.price;
          
          productsData[tempIdx].amount = productsData[tempIdx].amount - Number(nowItem.count);
          txtAmount[tempIdx].innerText = productsData[tempIdx].amount;
          
          // console.log('기존', cartData, productsData);
        }else{
        // 없으면 신규 장바구니 추가 & 재고수량 업데이트
          cartData.push(nowItem);

          productsData[index].amount = productsData[index].amount - Number(nowItem.count);
          txtAmount[index].innerText = productsData[index].amount;
          
          // console.log('신규' , cartData, productsData);
        }
      }else{
        alert(`${productsData[index].name} 재고가 부족합니다ㅠ`);
      }
    }
    
    // 리셋
    inpCheck[index].checked = false;
    inpCount[index].value = 1;
  });

  // 재고 0인 경우, 비활성화
  for(let i = 0; i < productsData.length; i++){
    if(productsData[i].amount == 0){
      inpCheck[i].closest('li').classList.add('disabled');
      inpCheck[i].checked = false;
      inpCheck[i].disabled = true;
      btnMinus[i].disabled = true;
      btnPlus[i].disabled = true;
    }
  }

  // 장바구니 출력
  cartProduct.innerHTML = '';
  totalTxt = 0;
  cartData.forEach((item, index) => {
    let templete = `<li>
                      <p>상품명 : <span class="txt_name">${productsData[index].name}</span>
                      <p>수량 : <span class="txt_amount">${item.count}</span>개
                      <p>금액 : <span class="txt_price">${item.price.toLocaleString()}</span>만원</p>
                    </li>`;
    cartProduct.innerHTML += templete;
    totalTxt += Number(item.price);
    totalPrice.innerText = totalTxt.toLocaleString();
  });
  
  // 상품 체크 안한 경우
  if(productChk == false){
    alert('상품을 장바구니에 추가해주세요~');
    return false;
  }

});

/**
 * 결제하기
 */
btnPay.addEventListener('click', function(){
  if(totalTxt >= 0){
    if(money.innerText >= totalTxt){
      money.innerText = Number(money.innerText) - totalTxt;
    }else{
      alert('지갑에 돈이 부족해요ㅠ');
    }  
  }else{
    alert('장바구니에 상품이 없습니다');
  }
});