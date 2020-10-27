FROM golang:1.14

WORKDIR /go/src/

COPY . .

##RUN GOOS=linux go build -ldflags="-s -w"
RUN GOOS=linux go build main.go

ENTRYPOINT ["./main"]