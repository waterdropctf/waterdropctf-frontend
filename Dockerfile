FROM node:14-slim AS builder
ENV NPM_REGISTRY https://mirrors.huaweicloud.com/repository/npm/
ENV NPM_REGISTRY https://registry.npm.taobao.org
COPY . /frontend
WORKDIR /frontend
RUN npm config set registry $NPM_REGISTRY && \
npm cache clean -f && \
npm install
RUN npm run-script build

FROM nginx:1.21
COPY --from=builder /frontend/dist /usr/share/nginx/html
COPY backend.conf.template /etc/nginx/conf.d/backend.conf.template
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT "/entrypoint.sh"
