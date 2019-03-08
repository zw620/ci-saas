FROM centos:7
MAINTAINER Zhongwei Liu <zw620.liu@samsung.com>

#RUN apt-get update && apt-get install -y wget tar
RUN yum install -y wget tar unzip
RUN wget -P /tmp/ https://nodejs.org/dist/v4.8.2/node-v4.8.2-linux-x64.tar.xz 
RUN tar -xvf /tmp/node-v4.8.2-linux-x64.tar.xz -C /usr/local/ && mv /usr/local/node-v4.8.2-linux-x64 /usr/local/node

#RUN cd /usr/local/scream/frontend/ \
#    && /usr/local/node/bin/npm install

RUN mkdir -p /usr/local/junos-ci/

COPY frontend.zip /usr/local/junos-ci/

RUN cd /usr/local/junos-ci/ \
    && unzip frontend.zip 

RUN cd /usr/local/junos-ci/frontend/ \
    && /usr/local/node/bin/npm install

EXPOSE 8080

#CMD /usr/local/node/bin/npm start
CMD ["sh","/usr/local/junos-ci/frontend/start.sh"]
