# grid栅格布局

## 横控制
- grid-template-columns
  - 100px 100px 100px (3列)
  - 1fr 2fr 1fr 按比例划分
  - repeat(3,100px) 
  - repeat(3,1fr)
  - repeat(auto-fill,100px) 自动填充
  - 1fr minmax(150px,1fr) minmax(150px,1fr)
  - 100px auto 100px
  - [c1] 1fr [c2] 1fr [c3] 1fr [c4] (网格线)

## 竖控制
- grid-template-rows
  - 100px 100px 100px 100px (4行)
  - 其他同上
  - 
## item间距
- row-gap
  - 20px
- colums-gap
  - 20px
- gap
  - 20px 20px
  - 20px
  - 
## 区域
- grid-template-areas
  - 'a b c' 'd e f' 'g h i';
  - 'a a a' 'b b b' 'c c c'
    - 'a a a'表示为一个区域
  - 'a . c' 'd . f' 'g . i'
    - 区域不需要利用的item，用.表示
    - 
## 排列方向
- grid-auto-flow
  - row
  - columns
  - 
## 控制item位置（item没有占满划分的栅格区情况下）
- justify-items
- align-items
- place-items(上面两个的简写)
- 
## 控制content在container的位置（content没有占满container情况）
- justify-content
- align-content

## 多出来的item的宽高
- grid-auto-rows
- grid-auto-columns

# item属性
- grid-column-start
- grid-column-end
- grid-row-start
- grid-row-end
- grid-column
  - 1 / 3   占栅格线1到3
  - span 3  跨越3个
- grid-row
  - 同上
- grid-area（与grid-template-areas联动）
  - b 

- justify-self
- align-self
- place-self（上面两个的简写）