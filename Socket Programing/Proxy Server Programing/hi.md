## Proxy Server for downloading files
  Using socket programming to develop a proxy server that helps a client program to download files from a remote server. The proxy server will fetch the files and transfer it to the client program.

#### • HW1Server.java
1. The server program should be launched as
```java HW1Server portNumber```
where the argument portNumber specifies the port of the proxy server.
2. The server program has to support multiple concurrent clients.
(refer to MultiThreadEchoServer example)
3. Once a client command is received, the server program needs to
identify the target file (host and file name), and then creates another
socket to the remote server following HTTP protocol. The request
line and one header line are required. For example,
GET /index.html HTTP/1.1
Host: example.com
4. The server program will get a HTTP response from the remote server
including a status line, some header lines, and the data. The server
program needs to transfer the data back to the client.

#### • HW1Client.java
1. The client program should be launched as
java HW1Client host portNumber
where the two argument specify the host and port of the server
program.
2. After the connection is established, the user can type in a command
with the target file’s URL that will be sent to the server, e.g.,
GET example.com/index.html
3. Next, the client will start to receive data from the proxy server.
