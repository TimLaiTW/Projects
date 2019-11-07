import java.io.*;
import java.net.*;
import java.util.Scanner;

public class HW1Server {

public static void main(String[] args) throws IOException{

        if (args.length != 1) {
            System.err.println("Usage: java HW1Server <port number>");
            System.exit(1);
        }
        
        int portNumber = Integer.parseInt(args[0]);

        try {
            ServerSocket serverSocket =
                new ServerSocket(portNumber);
            while(true){
            	Socket clientSocket = serverSocket.accept();                    
              	ClientWorker w=new ClientWorker(clientSocket);
	      		Thread t=new Thread(w);
	      		t.start();
	      	}
        }catch (IOException e) {
            System.out.println("Exception caught when trying to listen on port "
                + portNumber + " or listening for a connection");
            System.out.println(e.getMessage());
        }
	}
}

class ClientWorker implements Runnable {
  private Socket client;

//Constructor
  ClientWorker(Socket client) {
    this.client = client;
  }

  public void run(){
    String line;
    BufferedReader in = null;
    PrintWriter out = null;
    try{
    	in = new BufferedReader(new 
    		InputStreamReader(client.getInputStream()));
      	out = new 
      		PrintWriter(client.getOutputStream(), true);
		String requestline = in.readLine();

		String[] request = requestline.split(" ", 2);
		String method = request[0];
		String url = request[1];
		String[] urlarr = url.split("/",2);
		String host = urlarr[0];
		String file = urlarr[1];

		System.out.println(method + " /" + file + " HTTP/1.1");
		System.out.println("Host: " + host + "\r\n");

		try{
			Socket s = new Socket(InetAddress.getByName(host),80);
			PrintWriter pw = new PrintWriter(s.getOutputStream(), true);
			pw.println(method + " /" + file + " HTTP/1.1");
			pw.println("Host: " + host + "\r\n");
			pw.flush();
			BufferedReader br = new BufferedReader(
				new InputStreamReader(s.getInputStream()));
			String rl;
			while((rl = br.readLine()) != null) {
				out.println(rl);
			}
			in.close();
			out.close();	
			br.close();	
			pw.close();
			s.close();
		} catch (IOException e) {
			System.out.println("Read failed");
	        System.exit(-1);
	    }
	} catch (IOException e) {
      System.out.println("in or out failed");
      System.exit(-1);
    }
  }
}