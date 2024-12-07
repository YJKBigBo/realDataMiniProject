import React, { useEffect } from "react";
import PointAPI from "../apis/PointAPI";

const Payment = ({ iniData }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://stgstdpay.inicis.com/stdjs/INIStdPay.js";
    script.charset = "UTF-8";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      console.log("INIStdPay.js 로드 완료");
    };

    script.onerror = () => {
      console.error("INIStdPay.js 로드 실패");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayClick = async () => {
    try {
      await PointAPI.sendCharge(iniData);
    } catch (error) {
      console.log(error);
    }
    if (window.INIStdPay) {
      window.INIStdPay.pay("SendPayForm_id");
    } else {
      alert("INIStdPay 객체를 로드하지 못했습니다.");
    }
  };

  return (
    <div className="wrap">
      <main className="col-8 cont" id="bill-01">
        <section className="mb-5">
          <div className="tit">
            <h2>일반결제</h2>
            <p>
              KG이니시스 결제창을 호출하여 다양한 지불수단으로 안전한 결제를
              제공하는 서비스
            </p>
          </div>
        </section>

        <section className="menu_cont mb-5">
          <div className="card">
            <div className="card_tit">
              <h3>PC 일반결제</h3>
            </div>
            <div className="card_desc">
              <h4>※ 유의사항</h4>
              <ul>
                <li>
                  테스트 MID 결제 시 실 승인되며, 당일 자정(24:00) 이전에
                  자동으로 취소 처리됩니다.
                </li>
                <li>
                  가상계좌 채번 후 입금할 경우 자동 환불되지 않사오니, 가맹점
                  관리자 내 "입금통보테스트" 메뉴를 이용 부탁드립니다. <br />
                  (실 입금하신 경우 별도로 환불 요청해 주셔야 합니다.)
                </li>
                <li>
                  국민카드 정책상 테스트 결제가 불가하여 오류가 발생될 수
                  있습니다. 국민, 카카오뱅크 외 다른 카드로 테스트 결제
                  부탁드립니다.
                </li>
              </ul>
            </div>
            <form id="SendPayForm_id" method="post" className="mt-5">
              <div
                className="row g-3 justify-content-between"
                style={{ "--bs-gutter-x": "0rem" }}
              >
                <input type="hidden" name="version" value="1.0" />
                <label
                  className="col-10 col-sm-2 input param"
                  style={{ border: "none" }}
                >
                  gopaymethod
                </label>
                <input
                  type="text"
                  name="gopaymethod"
                  defaultValue="Card:Directbank:vbank"
                  className="col-10 col-sm-9 input"
                />
                <label
                  className="col-10 col-sm-2 input param"
                  style={{ border: "none" }}
                >
                  mid
                </label>
                <input
                  type="text"
                  name="mid"
                  value={iniData.mid}
                  className="col-10 col-sm-9 input"
                  readOnly
                />
                <label
                  className="col-10 col-sm-2 input param"
                  style={{ border: "none" }}
                >
                  oid
                </label>
                <input
                  type="text"
                  name="oid"
                  value={iniData.orderNumber}
                  className="col-10 col-sm-9 input"
                  readOnly
                />
                <label
                  className="col-10 col-sm-2 input param"
                  style={{ border: "none" }}
                >
                  price
                </label>
                <input
                  type="text"
                  name="price"
                  value={iniData.price}
                  className="col-10 col-sm-9 input"
                  readOnly
                />
                <label
                  className="col-10 col-sm-2 input param"
                  style={{ border: "none" }}
                >
                  timestamp
                </label>
                <input
                  type="text"
                  name="timestamp"
                  value={iniData.timestamp}
                  className="col-10 col-sm-9 input"
                  readOnly
                />

                <input type="hidden" name="buyertel" value="1" />

                <input
                  type="hidden"
                  name="signature"
                  value={iniData.signature}
                />
                <input type="hidden" name="mKey" value={iniData.mkey} />
                <input type="hidden" name="currency" defaultValue="WON" />
                <label
                  className="col-10 col-sm-2 input param"
                  style={{ border: "none" }}
                >
                  buyeremail
                </label>
                <input
                  type="text"
                  name="buyeremail"
                  defaultValue=""
                  className="col-10 col-sm-9 input"
                />
                <input
                  type="hidden"
                  name="returnUrl"
                  value="http://localhost:8080/point/INIstdpay_pc_return"
                />
                <input
                  type="hidden"
                  name="closeUrl"
                  value="http://localhost:3000"
                />
                <label
                  className="col-10 col-sm-2 input param"
                  style={{ border: "none" }}
                >
                  acceptmethod
                </label>
                <input
                  type="text"
                  name="acceptmethod"
                  defaultValue="HPP(1):below1000:va_receipt"
                  className="col-10 col-sm-9 input"
                />
              </div>
            </form>
            <button
              onClick={handlePayClick}
              className="btn_solid_pri col-6 mx-auto btn_lg"
              style={{ marginTop: "50px" }}
            >
              결제 요청
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Payment;
