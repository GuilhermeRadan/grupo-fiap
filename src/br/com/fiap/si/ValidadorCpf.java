package br.com.fiap.si;


import java.util.Scanner;

public class ValidadorCpf {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        int[] cpf = new int[11];
        int[] validador1 = {10, 9, 8, 7, 6, 5, 4, 3, 2};
        int[] validador2 = {11, 10, 9, 8, 7, 6, 5, 4, 3, 2};
        int[] multiplicacaoVetores = new int[9];
        int[] multiplicacaoDeVetores2 = new int[10];
        int somatorio = 0;
        int somatorio2 = 0;
        int digitoVerificador1;
        int digitoVerificador2;

        System.out.println("----------------------------------------------");
        System.out.println("---------------Validador de cpf---------------");
        System.out.println("----------------------------------------------");
        System.out.println("Digite os 9 primeiros números de seu CPF:");
        for (int i = 0; i < 9; i++) {
            cpf[i] = leitor.nextInt();
        }
        for (int i = 0; i < 9; i++) {
            multiplicacaoVetores[i] = cpf[i] * validador1[i];
        }
        for (int i = 0; i < 9; i++) {
            somatorio += multiplicacaoVetores[i];

        }
        int resDivisao = somatorio % 11;
        if (resDivisao < 2) {
            digitoVerificador1 = 0;
        } else {
            digitoVerificador1 = 11 - resDivisao;
        }

        cpf[9] = digitoVerificador1;
        for (int i = 0; i < 10; i++){
            multiplicacaoDeVetores2[i] = cpf[i] * validador2[i];
        }

        for (int i = 0; i < 10; i++) {
            somatorio2 += multiplicacaoDeVetores2[i];
        }
        int resDivisao2 = somatorio2 % 11;
        if (resDivisao2 < 2) {
            digitoVerificador2 = 0;
        } else {
            digitoVerificador2 = 11 - resDivisao2;
        }
        cpf[10] = digitoVerificador2;
        System.out.println("O númmero doseu CPF completo é:");
        for(int i =0; i< cpf.length; i++) {
        	System.out.print(cpf[i]);
        }
        leitor.close();
    }
    
}

