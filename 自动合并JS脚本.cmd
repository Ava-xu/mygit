@echo.

@echo.    -------------------------------------------

@echo.

@echo.    �Զ��ϲ�JS�ű�

@echo.

@echo.    �ṩ����һ���ϲ�����

@echo.

@echo.    -------------------------------------------

@echo.

@echo.

@echo           Powered By ��ɹ�

@echo.

@echo.

@echo.

@echo.   ====== 1���Ⱥϲ�min�汾�� =======

@pause

node r.js -o baseUrl=js name=index out=js/index.min.js

@echo.    ====== �ϲ�min�汾�ɹ��� =======

@pause

@echo.   ====== 2���ϲ�src�汾�� =======

node r.js -o baseUrl=js name=index out=js/index.src.js optimize=none

@echo.    ====== �ϲ�src�汾�ɹ��� =======

@echo.

@pause
