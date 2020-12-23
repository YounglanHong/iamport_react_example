
const IamPort = () => {
  // var IMP = window.IMP;
  // IMP.init("imp92037504");


  const onClickPayment = () => {
    // 1) 가맹점 식별
    const { IMP } = window;
    IMP.init("imp92037504");

    // 2) 결제 데이터 정의
    const data = {
      pg: 'html5_inicis',                           // PG사
      pay_method: 'card',                           // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호 
      /* IMP.request_pay를 호출하기 전 서버에 주문 정보를 전달(데이터베이스에 주문정보 INSERT)하고 
      서버가 생성한 주문 번호를 param의 merchant_uid속성에 지정 */
      amount: 100,                                 // 결제금액
      name: '아임포트 결제 데이터 분석',                  // 주문명
      buyer_name: '홍영란',                           // 구매자 이름
      buyer_tel: '01012341234',                     // 구매자 전화번호
      buyer_email: 'example@example',               // 구매자 이메일
      buyer_addr: '신사동 661-16',                    // 구매자 주소
      buyer_postcode: '06018',                      // 구매자 우편번호
    };
    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  const callback = (response) => {
    console.log(response);
    const {
      success,
      merchant_uid,
      error_msg,
    } = response;

    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  return (
    <button onClick={onClickPayment}>결제</button>
  )
}

export default IamPort;