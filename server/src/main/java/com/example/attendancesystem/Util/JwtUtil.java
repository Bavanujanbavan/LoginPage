// package com.example.attendancesystem.Util;

// import io.jsonwebtoken.Jwts;
// import io.jsonwebtoken.SignatureAlgorithm;
// import java.util.Date;

// import org.springframework.stereotype.Service;
// @Service
// public class JwtUtil {
//     private String secretKey = "secret";

//     @SuppressWarnings("deprecation")
//     public String generateToken(String username) {
//         return Jwts.builder()
//                 .setSubject(username)
//                 .setIssuedAt(new Date())
//                 .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 1 day expiration
//                 .signWith(SignatureAlgorithm.HS512, secretKey)
//                 .compact();
//     }
// }
