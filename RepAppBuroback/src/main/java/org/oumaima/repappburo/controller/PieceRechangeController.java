package org.oumaima.repappburo.controller;

import org.oumaima.repappburo.persistance.pieceRechange;
import org.oumaima.repappburo.service.PieceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/pieces")
public class PieceRechangeController {

    @Autowired
    private PieceService pieceRechangeService;

    @GetMapping
    public List<pieceRechange> getAllPieces() {
        return pieceRechangeService.getAllPieces();
    }

    @GetMapping("/{id}")
    public ResponseEntity<pieceRechange> getPieceById(@PathVariable int id) {
        return pieceRechangeService.getPieceById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public pieceRechange createPiece(@RequestBody pieceRechange piece) {
        return pieceRechangeService.createPiece(piece);
    }

    @PutMapping("/{id}")
    public ResponseEntity<pieceRechange> updatePiece(@PathVariable int id, @RequestBody pieceRechange piece) {
        pieceRechange updatedPiece = pieceRechangeService.updatePiece(id, piece);
        if (updatedPiece == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedPiece);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePiece(@PathVariable int id) {
        pieceRechangeService.deletePiece(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public List<pieceRechange> findPiecesByName(@RequestParam String name) {
        return pieceRechangeService.findPiecesByName(name);
    }
}

