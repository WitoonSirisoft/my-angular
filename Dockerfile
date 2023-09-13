FROM nginx
COPY dist/angular-jenkins /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# VOLUME /usr/share/nginx/html
# VOLUME /etc/nginx/conf.d/default.con

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]