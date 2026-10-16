@echo off
chcp 65001 > nul
echo ========================================================
echo  🚀 Đang khởi động MakeQuiz - Nền tảng học tập Spring Boot...
echo ========================================================
start http://localhost:8080
python server.py
pause
