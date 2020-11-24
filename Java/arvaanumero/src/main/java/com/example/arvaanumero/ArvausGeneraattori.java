package com.example.arvaanumero;

public class ArvausGeneraattori {
    private int _arvattavaNumero;

    public ArvausGeneraattori(int arvattavaNumero){
        _arvattavaNumero = arvattavaNumero;
    }

    public boolean ProsessoiArvaus(int arvattuNumero){
        if (arvattuNumero == _arvattavaNumero){
            System.out.println("arvasit oikean numeron");
            return true;
         
        } else if (_arvattavaNumero <= arvattuNumero){
            System.out.println("arvasit liian ison numeron");
            return false;
          
        } else if(_arvattavaNumero >= arvattuNumero){
            System.out.println("arvasit liian pienen numeron");
            return false;
        }
        return false;
    }
}
