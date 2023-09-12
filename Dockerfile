FROM nginx
RUN echo "PWD is: $PWD"
RUN echo $(ls)
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
VOLUME /usr/share/nginx/html
VOLUME /etc/nginx/conf.d/default.con

EXPOSE 8080