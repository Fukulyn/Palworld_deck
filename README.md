# 幻獸帕魯-圖鑑

## 設計概念
我們希望這網站可以讓沒接觸過幻獸帕魯或聽過但不熟悉的的人可以藉由我們的網站更加了解。
- 點擊屬性按鈕或工作適應性按鈕會顯示相對應有同樣特性的帕魯出來。
- 瀏覽著點擊每一隻幻獸帕魯都會顯示出單獨的圖片、屬性、工作適應性。
- 網站可以使用正序或倒序的方式查詢
## 技術選用
1.**JavaScript**:用於實現網站的核心邏輯處理，包含角色篩選功能與動態渲染效果。  
2.**React**:使用 React 作為前端框架，負責元件化開發並透過狀態管理實現屬性篩選與角色列表的即時更新。  
3.**bootstraps**:使用 Bootstrap 提供現成的 UI 元件與響應式設計框架，確保跨裝置的良好顯示效果。  

## 設計原則
1. **層次感與對比**
   - 背景與角色卡片之間保持強烈對比，讓用戶能輕鬆聚焦於角色展示。
2. **清晰直觀的功能分區**
   - 篩選功能：位於頁面頂部，提供屬性篩選與工作適應性選項，方便用戶快速找到目標角色。
3. **動態互動效果**
   - 懸停效果:當滑鼠移至卡片或按鈕時，提供輕微的放大，增強用戶操作的即時回饋感。

## 規劃
1. **元件拆分**
   - 將主要功能區塊（角色主體 詳細敘述 屬性類別）拆分為獨立元件，使按鍵可以做搜尋篩選。

## 分工表
| **成員** | **負責項目** |
|----------|--------------|
| 張祥育    | 文檔撰寫、資料整理 |
| 曾晨閎    | 主題構想、架構設計 |
| 卓家全    | 資料蒐集、功能構想 |
| 王國全    | 程式撰寫、偵錯排解 |
