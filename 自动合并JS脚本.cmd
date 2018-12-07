@echo.

@echo.    -------------------------------------------

@echo.

@echo.    自动合并JS脚本

@echo.

@echo.    提供简便的一键合并功能

@echo.

@echo.    -------------------------------------------

@echo.

@echo.

@echo           Powered By 万成国

@echo.

@echo.

@echo.

@echo.   ====== 1、先合并min版本！ =======

@pause

node r.js -o baseUrl=js name=index out=js/index.min.js

@echo.    ====== 合并min版本成功！ =======

@pause

@echo.   ====== 2、合并src版本！ =======

node r.js -o baseUrl=js name=index out=js/index.src.js optimize=none

@echo.    ====== 合并src版本成功！ =======

@echo.

@pause
