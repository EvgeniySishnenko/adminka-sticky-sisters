import React from "react"
import { Image } from "react-bootstrap/"

const EditCountProducts = () => {
  return (
    <div>
      <div className="item-wr">
        <div className="edit-count-product-pic">
          <Image
            className="edit-count-product-pic_img"
            src="http://placehold.it/110x150"
            rounded
          />
        </div>

        <div className="edit-count-product-wr">
          <div className="edit-count-product-title">
            Подставка под кружку Гарри Поттер
          </div>
          <div className="block-edit__current-count">
            <div className="block-edit__current-shrt-text">
              Количество товаров на складе:
            </div>
            <div
              id="current-num"
              className="block-edit__current-shrt-number-all_count"
            >
              243
            </div>
          </div>
          <div className="block-edit__current-count">
            <div className="block-edit__current-shrt-text">Всего купленно:</div>
            <div
              id="current-all-pay-num"
              className="block-edit__current-shrt-number-pay"
            >
              123
            </div>
          </div>

          <div className="block-edit__current-count">
            <div className="block-edit__current-shrt-text">
              Купленно вне сайта:
            </div>
            <div
              id="current-pay-out-num"
              className="block-edit__current-shrt-number-pay"
            >
              123
            </div>
          </div>
        </div>
        <div className="edit-count-product__block-edit">
          <div className="label-wr">
            <label htmlFor="" className="block-edit__label-pay">
              <span className="block-edit-pay">Покупка вне сайта</span>
              <input
                type="number"
                id="products-pay"
                className="block-edit__label-inp"
              />
              <button data-id="" className="block-edit__label-btn pay-pls">
                +
              </button>
              <button data-id="" className="block-edit__label-btn pay-mns">
                -
              </button>
            </label>
          </div>

          <div className="label-wr">
            <label htmlFor="" className="block-edit__label-pls">
              <span className="block-edit-pls">Добавить товар на склад</span>
              <input
                type="number"
                id="products-pls"
                className="block-edit__label-inp"
              />
              <button data-id="" className="block-edit__label-btn pls">
                ок
              </button>
            </label>
          </div>

          <div className="label-wr">
            <label htmlFor="" className="block-edit__label-mns">
              <span className="block-edit-mns">Убрать товар на склад</span>
              <input
                type="number"
                id="products-mns"
                className="block-edit__label-inp"
              />
            </label>
            <button data-id="<" className="block-edit__label-btn mns">
              ок
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditCountProducts
