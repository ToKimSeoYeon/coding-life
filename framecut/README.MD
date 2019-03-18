
주의:

CROS ORIGIN 문제가 있다.

해결방법:

apache웹서버를 설치를 하면 된다.


도커로 아파치 설치하기

docker run -i -t -p 80:80 -v c/경로/~:/볼륨경로 --name apache-web ubuntu:14.04.1 /bin/bash

컨테이너 내부에서
apt-get install apache2

apt-get install php5

service apache2 status
service apache2 start


윈도우에서 도커 사용시, 접속 경로 알려주는 명령어
=> docker-machine url